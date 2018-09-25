const exampleCategories = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Python',
  },
  {
    id: 4,
    name: 'Ruby',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'C++',
  },
  {
    id: 7,
    name: 'CSS',
  },
  {
    id: 8,
    name: 'C#',
  },
  {
    id: 9,
    name: 'C',
  },
  {
    id: 10,
    name: 'Go',
  },
  {
    id: 11,
    name: 'Shell',
  },
  {
    id: 12,
    name: 'Objective C',
  },
  {
    id: 13,
    name: 'Scala',
  },
  {
    id: 14,
    name: 'Swift',
  },
  {
    id: 15,
    name: 'TypeScript',
  },
]

const generateTimes = x =>
  [...Array(x)].reduce(
    (res, current, i) => [
      ...res,
      ...exampleCategories.map(c => ({
        id: i === 0 ? c.id : c.id + exampleCategories.length * i,
        name: `${c.name} ${i + 1}`,
      })),
    ],
    []
  )

export default {
  categories: generateTimes(5),
  selectedCategories: [],
}
