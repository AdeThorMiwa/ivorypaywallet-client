const AuthImage = ({ img }: { img: string }) => {
  return (
    <div className="bg-[#F7F4FF] h-[40vh] grid place-content-center">
      <img src={img} alt="auth-image" />
    </div>
  );
};
export default AuthImage;
