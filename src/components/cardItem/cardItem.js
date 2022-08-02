export const Card = ({ title, img, population, region, capital }) => {
  return (
    <li className="border border-black w-[270px] h-[336px] my-[50px] rounded-lg bg-yellow-100">
      <img className="w-full h-[160px] rounded-t-lg" src={img} alt="Flag" />
      <h2 className="font-[700] leading-6 text-[18px] ml-[24px] mt-[24px] mb-[10px]"><span className="">{title}</span></h2>
      <p className="font-[500] ml-[25px]">Population:<span className="font-normal text-[#848484] text-[14px] ml-2 tracking-[1px]">{population}</span></p>
      <p className="font-[500] ml-[25px]">Region:<span className="font-normal text-[#848484] text-[14px] ml-2 tracking-[1px]">{region}</span></p>
      <p className="font-[500] ml-[25px]">Capital:<span className="font-normal text-[#848484] text-[14px] ml-2 tracking-[1px]">{capital}</span></p>
    </li>
  )
}