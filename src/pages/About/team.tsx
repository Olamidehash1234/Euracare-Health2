import { useState } from 'react';
import { teamMembers } from '../../data/team';
import TeamMemberModal from '../../components/TeamMemberModal';
import type { TeamMember } from '../../data/team';

const LeadershipTeam = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <div className="bg-[#FEF8F5] py-[40px] px-4 lg:py-20 lg:px-20">
            <div className="">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-[30px] lg:mb-[40px]">
                    <div>
                        <p className="text-[14px] font-medium leading-[20px] uppercase text-[#0C2141]">
                            OUR LEADERSHIP EXPERTISE
                        </p>
                        <h1 className="mt-[4px] text-[#0C2141] lg:mt-0 text-[22px] lg:text-[40px] font-medium leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-1.8px] max-w-[562px]">
                            A diverse team driven by expertise, compassion, and commitment.
                        </h1>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">
                    {teamMembers.map((member) => (
                        <div 
                            key={member.id} 
                            className="group cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            {/* Image Container */}
                            <div className="relative mb-[10px] overflow-hidden rounded-t-[12px] bg-gray-200 h-[270px] lg:h-[270px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-full object-cover transition-transform duration-300 ${member.id === 2 ? 'h-full' : ''}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Member Info */}
                            <div className="">
                                <h3 className="text-lg font-medium text-[#02070D] lg:tracking-[-1.56px] lg:leading-[28px]">
                                    {member.name}
                                </h3>
                                <p className="text-[14px] text-[#000000] italic">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedMember && (
                <TeamMemberModal
                    isOpen={!!selectedMember}
                    onClose={() => setSelectedMember(null)}
                    member={selectedMember}
                />
            )}
        </div>
    );
};

export default LeadershipTeam;