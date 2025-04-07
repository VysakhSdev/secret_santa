const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const generateAssignments = (employees, previous) => {
  const prevMap = new Map(previous.map(p => [p.Employee_EmailID, p.Secret_Child_EmailID]));

  for (let attempt = 0; attempt < 100; attempt++) {
    const receivers = shuffle(employees);
    const assignments = [];
    const used = new Set();

    let valid = true;

    for (const giver of employees) {
      const match = receivers.find(r =>
        r.Employee_EmailID !== giver.Employee_EmailID &&
        prevMap.get(giver.Employee_EmailID) !== r.Employee_EmailID &&
        !used.has(r.Employee_EmailID)
      );

      if (!match) {
        valid = false;
        break;
      }

      used.add(match.Employee_EmailID);
      assignments.push({
        Employee_Name: giver.Employee_Name,
        Employee_EmailID: giver.Employee_EmailID,
        Secret_Child_Name: match.Employee_Name,
        Secret_Child_EmailID: match.Employee_EmailID
      });
    }

    if (valid) return assignments;
  }

  throw new Error("❌ Could not generate valid assignments after 100 tries.");
};
