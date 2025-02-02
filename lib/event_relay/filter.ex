defmodule ER.Filter do
  use Ecto.Schema
  import Ecto.Changeset
  import ER.Validators, only: [validate_at_least_one_required: 2]
  import ER
  import ER.Enum

  embedded_schema do
    field :field, :string
    field :field_path, :string

    field :comparison, Ecto.Enum,
      values: [
        :equal,
        :not_equal,
        :like,
        :ilike,
        :in,
        :greater_than,
        :greater_than_or_equal,
        :less_than,
        :less_than_or_equal
      ]

    field :value, :string
    field :cast_as, Ecto.Enum, values: [:string, :integer, :float, :date, :datetime, :boolean]
  end

  def field_options(:event) do
    [
      :name,
      :occurred_at,
      :reference_key,
      :group_key,
      :trace_key,
      :source,
      :topic_name,
      :topic_identifier,
      :user_id,
      :anonymous_id,
      :offset
    ]
  end

  def changeset(filter, attrs) do
    filter
    |> cast(attrs, [:field, :field_path, :comparison, :value, :cast_as])
    |> validate_required([:comparison, :value])
    |> validate_at_least_one_required([:field, :field_path])
  end

  def translate_comparison(comparison) do
    case to_string(comparison) do
      "equal" ->
        "="

      "not_equal" ->
        "!="

      "greater_than" ->
        ">"

      "greater_than_or_equal" ->
        ">="

      "less_than" ->
        "<"

      "less_than_or_equal" ->
        "<="

      c ->
        c
    end
  end

  def translate(filters) do
    filters
    |> Enum.reduce([], fn filter, acc ->
      transformed_filter =
        filter
        |> to_map()
        |> atomize_map()
        |> Map.update!(:comparison, &translate_comparison/1)
        |> translate_cast_as()

      [transformed_filter | acc]
    end)
  end

  def translate_cast_as(%{cast_as: _cast_as} = filter) do
    Map.update!(filter, :cast_as, &from_grpc_enum/1)
  end

  def translate_cast_as(filter) do
    filter
  end

  defmodule BadFieldError do
    defexception message: "field does not exist"
  end
end
