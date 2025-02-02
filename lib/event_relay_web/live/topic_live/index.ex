defmodule ERWeb.TopicLive.Index do
  use ERWeb, :live_view

  alias ER.Events
  alias ER.Events.Topic

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, :topics, list_topics())}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Topic")
    |> assign(:topic, %Topic{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Topics")
    |> assign(:topic, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    topic = Events.get_topic!(id)
    {:ok, _} = Events.delete_topic(topic)

    {:noreply, assign(socket, :topics, list_topics())}
  end

  defp list_topics do
    Events.list_topics()
  end
end
