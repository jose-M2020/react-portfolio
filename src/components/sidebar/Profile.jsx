const Profile = () => (
  <div className='px-7 pt-1 bg-[length:100%_75px] bg-no-repeat flex gap-3'
    style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 25% 100%, #658bc6 25%, #1e40af)' }}
  >
    <img
      src="images/profile.png"
      alt="Profile"
      className='w-[110px] h-[110px] mb-3 rounded-full bg-[#658bc6] mt-2'
    />
    <div className='mt-[18px]'>
      <p className='font-bold mb-1'>
        José Manuel Silva
      </p>
      <div className='text-gray-200'>
        <p className='text-xs mb-1'>
          Desarrollador web
        </p>
        {/* <p className='text-xs mt-[4px]'>
          <i className="fa-solid fa-location-dot" /> Guerrero, MX.
        </p> */}
      </div>
    </div>
  </div>
);

export default Profile; 