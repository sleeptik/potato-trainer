namespace Domain.Users;

public sealed class Role(string name)
{
    public int Id { get; private set; } = default;
    public string Name { get; private set; } = name;
}