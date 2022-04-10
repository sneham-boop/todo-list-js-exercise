// Create a new task object created
// A new task will be created as incomplete
const newTask = function (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    completeTask: function () {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask("cat litter", "remove litter");
const task2 = newTask("dog walk", "walk the dog");
const tasks = [task1, task2];

//console.log(tasks);

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

//console.log(tasks);
