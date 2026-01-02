import { seed } from '../src/app/database'

async function main() {
  console.log('Starting database seeding...')

  try {
    await seed()
    console.log('✓ Database seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('✗ Error seeding database:', error)
    process.exit(1)
  }
}

main()
