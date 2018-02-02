var objectsArray = [
    {date: -5, time:1},
    {date: 2, time:1},
    {date: 444, time:1},
    {date: 0, time:1},
    {date: 121, time:1}
];

function compare(a,b) {
  if (a.date < b.date)
    return -1;
  else if (a.date > b.date)
    return 1;
  else
    return 0;
}

objectsArray.sort(compare);

//=> => [ { date: -5, time: 1 },
//{ date: 0, time: 1 },
//{ date: 2, time: 1 },
//{ date: 121, time: 1 },
//{ date: 444, time: 1 } ]

//I don't understand why this works, but it does
//begin with the array of storage, pulled out of local storage
//sort the array
//then, every time the landing page is opened, sort all appts in sortedArray (or w/e name) and append to page
//how to sort time? what format can we put this in in order to be sortable?
//you need to sort FIRST by date, and THEN by time, maintaining the order of the dates that you previously determined
