﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using WebApi.Common;

namespace WebApi.Education;

[Route("education")]
public sealed class EducationController(ISender sender) : ApiController
{
    [HttpGet("new")]
    public async Task<IActionResult> GetNewExercisesSet(int subjectId)
    {
        var exercises = await sender.Send(new GetExerciseRequest(subjectId));
        return Ok(exercises);
    }
}