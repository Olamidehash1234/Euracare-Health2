import type { ServiceData } from "../../../../data/services";

export default function Conditions({ service }: { service: ServiceData }) {
    return (
        <div id="conditions" className="px-[16px] py-[60px] lg:px-[80px] lg:pt-[120px] lg:pb-[80px]">
            <div className="mb-[30px] lg:mb-[60px]">
                <p className="text-[14px] lg:mb-[10px] leading-[20px] font-medium text-[#02070D] uppercase">
                    Conditions We Treat
                </p>
                <h2 className="text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                    {service.conditionSubtitle}
                </h2>
            </div>

            <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[30px] lg:gap-y-[40px] lg:gap-x-[25px]">
                {service.conditionList?.map((v) => (
                    <article
                        key={v}
                        className="pb-[20px] lg:pb-[30px] border-b border-[#676767]"
                    >
                        <div className="flex flex-col">
                            <div className="flex gap-[16px] items-center">
                                <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto" />
                                <h3 className="text-[14px] lg:text-[16px] font-normal tracking-tight lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                    {v}
                                </h3>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <h2 className="mt-[40px] text-[24px] lg:max-w-[700px] tracking-[-0.5px] lg:text-[24px] leading-[28px] lg:tracking-[-0.54px] font-medium text-[#02070D]">
                {service.additionalconditionSubtitle}
            </h2>

            <div className="mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[30px] lg:gap-y-[40px] lg:gap-x-[25px]">
                {service.additionalconditionList?.map((v) => (
                    <article
                        key={v}
                        className="pb-[20px] lg:pb-[30px] border-b border-[#676767]"
                    >
                        <div className="flex flex-col">
                            <div className="flex gap-[16px] items-center">
                                <img src="/service-d/test.svg" alt="" className="w-[32px] h-[32px] lg:h-auto lg:w-auto" />
                                <h3 className="text-[14px] lg:text-[16px] font-normal tracking-tight lg:leading-[26px] lg:tracking-[-0.5px] text-[#02070D]">
                                    {v}
                                </h3>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}