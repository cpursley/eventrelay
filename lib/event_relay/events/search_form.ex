defmodule ER.Events.SearchForm do
  use Ecto.Schema

  schema "" do
    embeds_many(:event_filters, ER.Events.EventFilter)
  end
end