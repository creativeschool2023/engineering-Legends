interface Engineer {
  name: string;
  field: string;
  contributions: string[];
}

const EngineeringLegend: Engineer = {
  name: 'Nikola Tesla',
  field: 'Electrical Engineering',
  contributions: [
    'Alternating Current (AC)',
    'Tesla Coil',
    'Induction Motor',
    'Polyphase System'
  ]
}

const printEngineeringLegend = (engineer: Engineer) => {
  console.log(`Name: ${engineer.name}`);
  console.log(`Field: ${engineer.field}`);
  console.log('Contributions:');
  engineer.contributions.forEach(contribution => console.log(`- ${contribution}`));
}

printEngineeringLegend(EngineeringLegend);