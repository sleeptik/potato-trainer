namespace Domain.Trainer;

public sealed class Difficulty(string name)
{
    public int Id { get; private set; } = default;
    public string Name { get; private set; } = name;
}