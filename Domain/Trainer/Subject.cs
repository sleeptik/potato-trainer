namespace Domain.Trainer;

public sealed class Subject(string name)
{
    public int Id { get; private set; } = default;
    public string Name { get; private set; } = name;
}