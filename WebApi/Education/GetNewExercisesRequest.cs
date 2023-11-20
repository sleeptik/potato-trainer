﻿using MediatR;

namespace WebApi.Education;

public record GetNewExercisesRequest(int SubjectId) : IRequest<IList<GetNewExercisesResponse>>;