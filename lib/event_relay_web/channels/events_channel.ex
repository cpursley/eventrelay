defmodule ERWeb.EventsChannel do
  use ERWeb, :channel

  @impl true
  def join("events:" <> subscription_id, payload, socket) do
    IO.inspect(subscription_id: subscription_id, payload: payload)

    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
