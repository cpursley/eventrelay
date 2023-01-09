defmodule ER.Events.ChannelCache do
  use Nebulex.Cache,
    otp_app: :event_relay,
    adapter: Nebulex.Adapters.Horde,
    horde: [
      members: :auto,
      process_redistribution: :passive
      # any other Horde options ...
    ]

  require Logger

  def register_socket(pid, subscription_id) do
    Logger.debug(
      "Registering socket #{inspect(pid)} for subscription #{inspect(subscription_id)}"
    )

    :ok =
      ER.ChannelMonitor.monitor(:events, pid, {__MODULE__, :deregister_socket, [subscription_id]})

    incr(subscription_id)
  end

  def deregister_socket(subscription_id) do
    Logger.debug("Deregistering socket for subscription #{subscription_id}")
    decr(subscription_id)
  end

  def get_socket_count(subscription_id) do
    get(subscription_id)
  end

  def any_sockets?(subscription_id) do
    get_socket_count(subscription_id) > 0
  end
end
