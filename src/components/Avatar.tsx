const Avatar = () => {
  return (
    <button className={`flex flex-col items-center gap-x-4 w-fit max-w-[64px]`}>
      <span className="h-[64px] w-[64px] block rounded-full overflow-hidden border border-[#270685] p-[2px]">
        <img
          src="https://api.dicebear.com/6.x/thumbs/svg?seed=Bandit&flip=true&radius=50"
          alt=""
        />
      </span>
      <div className="text-xs mt-1 text-center">
        <span>Abdullahi</span>
      </div>
    </button>
  );
};

export default Avatar;
