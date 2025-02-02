defmodule ERWeb.Router do
  use ERWeb, :router

  import ERWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ERWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug ERWeb.APIAuth
  end

  scope "/", ERWeb do
    pipe_through :browser

    get "/", PageController, :home
  end

  # Other scopes may use custom stacks.
  scope "/api", ERWeb do
    pipe_through [:api, :authenticate_api_token]
    post "/events", EventController, :publish
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:event_relay, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ERWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  scope "/", ERWeb do
    pipe_through [:browser, :redirect_if_user_is_authenticated]

    live_session :redirect_if_user_is_authenticated,
      on_mount: [{ERWeb.UserAuth, :redirect_if_user_is_authenticated}] do
      # live "/users/register", UserRegistrationLive, :new
      live "/users/log_in", UserLoginLive, :new
      live "/users/reset_password", UserForgotPasswordLive, :new
      live "/users/reset_password/:token", UserResetPasswordLive, :edit
    end

    post "/users/log_in", UserSessionController, :create
  end

  scope "/", ERWeb do
    pipe_through [:browser, :require_authenticated_user]

    live_session :require_authenticated_user,
      on_mount: [{ERWeb.UserAuth, :ensure_authenticated}] do
      live "/users/settings", UserSettingsLive, :edit
      live "/users/settings/confirm_email/:token", UserSettingsLive, :confirm_email

      live "/topics", TopicLive.Index, :index
      live "/topics/new", TopicLive.Index, :new

      live "/topics/:id", TopicLive.Show, :show
      live "/topics/:topic_id/events", EventLive.Index, :index
      live "/topics/:topic_id/events/new", EventLive.Index, :new

      live "/topics/:topic_id/events/:id", EventLive.Show, :show

      live "/subscriptions", SubscriptionLive.Index, :index
      live "/subscriptions/new", SubscriptionLive.Index, :new
      live "/subscriptions/:id/edit", SubscriptionLive.Index, :edit

      live "/subscriptions/:id", SubscriptionLive.Show, :show
      live "/subscriptions/:id/show/edit", SubscriptionLive.Show, :edit

      live "/api_keys", ApiKeyLive.Index, :index
      live "/api_keys/new", ApiKeyLive.Index, :new
      live "/api_keys/:id/edit", ApiKeyLive.Index, :edit

      live "/api_keys/:id", ApiKeyLive.Show, :show
      live "/api_keys/:id/show/edit", ApiKeyLive.Show, :edit

      live "/metrics", MetricLive.Index, :index
      live "/metrics/new", MetricLive.Index, :new
      live "/metrics/:id/edit", MetricLive.Index, :edit

      live "/metrics/:id", MetricLive.Show, :show
      live "/metrics/:id/show/edit", MetricLive.Show, :edit
    end
  end

  scope "/", ERWeb do
    pipe_through [:browser]

    delete "/users/log_out", UserSessionController, :delete

    live_session :current_user,
      on_mount: [{ERWeb.UserAuth, :mount_current_user}] do
      live "/users/confirm/:token", UserConfirmationLive, :edit
      live "/users/confirm", UserConfirmationInstructionsLive, :new
    end
  end
end
