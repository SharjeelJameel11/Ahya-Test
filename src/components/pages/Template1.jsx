import React from 'react'
import { Contact,References,SocialLink } from '../../assets/svg'
const Template1 = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6">
      <div className="w-[900px] bg-white shadow-lg">
        <div className="grid grid-cols-4 min-h-[1100px]">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}
const Sidebar = () => {
  return (
    <div className="relative bg-[#1F1F1F] py-10 h-full overflow-hidden px-6">
      <div
        className="absolute top-0 left-0 w-full h-[200px] bg-[#EB632C]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      <ProfileAvatar />
      <div className="relative z-10  px-10 top-10  py-10 space-y-12">
        <SidebarItem title="Contact Me" svg={Contact} />
        <SidebarItem title="References" svg={References} />
        <SidebarItem title="Social Link" svg={SocialLink} />
      </div>

    </div>
  )
}
const ProfileAvatar = () => {
  return (
    <div className="relative z-10 top-10 flex justify-center ">
      <div className="w-40 h-40 bg-white p-1 rounded-full">
        <div className="w-full h-full bg-gray-400 rounded-full" />
      </div>
    </div>
  )
}
const SidebarItem = ({ title,svg }) => {
  const Icon = svg;
  return (
    <div className="flex  items-center gap-4">
      <span className="w-3 h-6 rounded-b rounded-t bg-orange-500" />
      <div className="flex items-center justify-center gap-3">

  {Icon && (
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
      <Icon  />
    </div>
  )}

  <div className="text-[1.6rem] font-bold tracking-wide text-white">
    {title}
  </div>

</div>
     
    
    </div>
  )
}
const MainContent = () => {
  return (
    <div className="col-span-3 relative px-10 py-8">
      <Section title="About Me" />
      <Section title="Work Experience" />
      <Section title="Education" />
      <Section title="Areas of Expertise" />
      <Section title="Language" />
      <div
        className="absolute bottom-0 w-full h-64 bg-[#EB632C]"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 0 100%)' }}
      />
    </div>
  )
}
const Section = ({ title }) => {
  return (
    <div className="mb-14">

      <div className="flex items-center gap-3 mb-4">
        <span className="w-3 h-3 rounded-full bg-orange-500" />
        <h2 className="text-lg font-semibold uppercase">
          {title}
        </h2>
      </div>

      <div className="h-[1px] bg-gray-300 w-full" />

    </div>
  )
}

export default Template1
