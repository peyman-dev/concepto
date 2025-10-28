import EventCard from '@/components/common/cards/event-card'
import SectionHeader from '@/components/common/section-header'
import Container from '@/components/ui/container'
import React from 'react'

const RecentEvents = () => {
  return (
    <Container as="section" className='my-[347px]!'>
      <SectionHeader 
        title='رویداد های اخیر'
      />

      <div className='grid mt-10 grid-cols-2 gap-x-6 gap-y-8'>
        {Array.from({length:4}).map((_, index) => <EventCard />)}
      </div>
    </Container>
  )
}

export default RecentEvents