﻿using Domain.Users;

namespace Domain.Trainer;

public sealed class Student
{
    // ReSharper disable once FieldCanBeMadeReadOnly.Local
    private IList<Assignment> _assignments = new List<Assignment>();
    private float _score;
    private IList<Subject> _subjectsToStudy = new List<Subject>();

    private Student()
    {
    }

    public int UserId { get; private set; }
    public User User { get; private set; } = null!;

    public int CurrentRankId { get; set; }
    public Rank CurrentRank { get; private set; } = null!;

    public float Score
    {
        get => _score;
        set => _score = Math.Max(0, value);
    }

    public IReadOnlyList<Assignment> Assignments => _assignments.AsReadOnly();
    public IReadOnlyList<Subject> SubjectsToStudy => _subjectsToStudy.AsReadOnly();

    public static Student Create(int userId, IEnumerable<Rank> ranks, IEnumerable<Subject> subjects)
    {
        var enumeratedRanks = ranks.ToList();
        var enumeratedSubjects = subjects.ToList();

        if (enumeratedRanks.Count == 0)
            throw new ArgumentException();

        var minRankId = enumeratedRanks.MinBy(rank => rank.LowerBound).Id;

        return new Student
        {
            UserId = userId,
            CurrentRankId = minRankId,
            _subjectsToStudy = enumeratedSubjects
        };
    }
}