// Part 1 - Growing Pains ============================================================
// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:

// The area in which the plants are contained is circular, with a radius of 5 meters.

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:

// Predict the plant growth after a specific number of weeks.

// Implement control flow to make decisions on whether the plants should be:

// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const radius = 5
const pi = 3.1415
const totalArea = pi * (radius * radius)

let week = 0
let plants = 20
let plantsByWeek = plants * (2 ** week)
let plantsAreaByWeek = plantsByWeek * 0.8

const garden80Percent = totalArea * 0.8
const garden50Percent = totalArea * 0.5

let totalWeeks = 3

// console.log(plantsByWeek)
// console.log(plantsAreaByWeek)

if (plantsAreaByWeek > garden80Percent) {
  console.log(`Prune the plants. as ${plantsAreaByWeek}sq ft is more than 80% of the ${totalArea} sq ft available`)
} else if (plantsAreaByWeek > totalArea * 0.5) {
  console.log(`Monitor the plants. as ${plantsAreaByWeek}sq ft is less than 80% and more than 50% of the ${totalArea} sq ft available`)
} else {
  console.log(`Plant more plants. as ${plantsAreaByWeek}sq ft is less than 50% of ${totalArea} sq ft available`)
}

{
  let week = 0
  let plants = 20
  let plantsByWeek = plants * (2 ** week)
  let plantsAreaByWeek = plantsByWeek * 0.8

  if (plantsAreaByWeek > garden80Percent) {
    console.log(`Week 1: Prune the plants. as ${plantsAreaByWeek} sq ft is more than 80% of ${totalArea} sq ft available`)
  } else if (plantsAreaByWeek > garden50Percent) {
    console.log(`Week 1: Monitor the plants. as ${plantsAreaByWeek} sq ft is less than 80% and more than 50% of ${totalArea} sq ft available`)
  } else {
    console.log(`Week 1: Plant more plants. as ${plantsAreaByWeek} sq ft is less than 50% of ${totalArea} sq ft available`)
  }
}

{
  let week = 1
  let plants = 20
  let plantsByWeek = plants * (2 ** week)
  let plantsAreaByWeek = plantsByWeek * 0.8

  if (plantsAreaByWeek > garden80Percent) {
    console.log(`Week 2: Prune the plants. as ${plantsAreaByWeek} sq ft is more than 80% of ${totalArea} sq ft available`)
  } else if (plantsAreaByWeek > garden50Percent) {
    console.log(`Week 2: Monitor the plants. as ${plantsAreaByWeek} sq ft is less than 80% and more than 50% of ${totalArea} sq ft available`)
  } else {
    console.log(`Week 2: Plant more plants. as ${plantsAreaByWeek} sq ft is less than 50% of ${totalArea} sq ft available`)
  }
}

{
  let week = 2
  let plants = 20
  let plantsByWeek = plants * (2 ** week)
  let plantsAreaByWeek = plantsByWeek * 0.8

  if (plantsAreaByWeek > garden80Percent) {
    console.log(`Week 3: Prune the plants. as ${plantsAreaByWeek} sq ft is more than 80% of ${totalArea} sq ft available`)
  } else if (plantsAreaByWeek > garden50Percent) {
    console.log(`Week 3: Monitor the plants. as ${plantsAreaByWeek} sq ft is less than 80% and more than 50% of ${totalArea} sq ft available`)
  } else {
    console.log(`Week 3: Plant more plants. as ${plantsAreaByWeek} sq ft is less than 50% of ${totalArea} sq ft available`)
  }
}

// Loop version
// {
//   for (let week=0; week < totalWeeks; week++) {
//     // let plants = 20
//     let plantsByWeek = plants * (2 ** week)
//     let plantsAreaByWeek = plantsByWeek * 0.8

//     if (plantsAreaByWeek > garden80Percent) {
//       console.log(`Week ${week +1}: Prune the plants. as ${plantsAreaByWeek} is more than 80% of ${totalArea}`)
//     } else if (plantsAreaByWeek > garden50Percent) {
//       console.log(`Week ${week +1}: Monitor the plants. as ${plantsAreaByWeek} is less than 80% and more than 50% of ${totalArea}`)
//     } else {
//       console.log(`Week ${week +1}: Plant more plants. as ${plantsAreaByWeek} is less than 50% of ${totalArea}`)
//     }
//   }
// }

// Part 2 - Thinking Bigger ==========================================================

// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

{
  let week = 10
  let plants = 100
  let plantsByWeek = plants * (2 ** week)
  let plantsAreaByWeek = plantsByWeek * 0.8

  console.log(`If the scientists were to start with 100 plants and did not prun them for 10 weeks, you would need ${plantsAreaByWeek} sq ft total, and  ${plantsAreaByWeek - totalArea} more sq ft in additional space`)
}

// Part 3 - Errors in Judgement ======================================================

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

{
  let week = 0
  let plants = 100
  let plantsByWeek = plants * (2 ** week)
  let plantsAreaByWeek = plantsByWeek * 0.8

  try {
    if (plantsAreaByWeek <= totalArea) {
      console.log("Enough Space");
    } else {
      throw `Not enough Space for ${plants} plants`;
    }
  } catch (error) {
    console.log(error);
  }
}