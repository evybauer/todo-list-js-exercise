// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out off the litter box");
const task2 = newTask("Do laundry", "😨");
const task3 = newTask("Study", "🤓");

const tasks = [task1, task2, task3];


task1.logState; // Clean Cat Litter has not been completed
task1.markCompleted(false);

task2.logState; // Do laundry
task2.markCompleted(true);

task3.logState; // Do laundry
task3.markCompleted(true);

console.log(tasks);


