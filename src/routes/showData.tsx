import { useUserContext } from "../userContext";

export const ShowData = () => {
  const { userData } = useUserContext();

  return (
    <div className="flex gap-2 flex-wrap items-center justify-center h-screen bg-primaryBg">
      {userData.map((usr) => {
        return (
          <div key={usr.id}>
            <div className="bg-accent/20 p-6 m-6 shadow-lg md:w-full rounded-3xl md:mx-auto text-primaryText">
              <h1 className="font-extrabold text-4xl mb-6 text-center text-primaryText">
                {usr.FirstName} {usr.LastName}
              </h1>
              <div className="grid grid-cols-8 gap-6">
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Email</h2>
                  <p className="text-base">{usr.Email}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Username</h2>
                  <p className="text-base">{usr.Username}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Phone Number</h2>
                  <p className="text-base">{usr.PhoneNo}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Country</h2>
                  <p className="text-base">{usr.Country}</p>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-6 mt-6">
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">City</h2>
                  <p className="text-base">{usr.City}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Pan Number</h2>
                  <p className="text-base">{usr.PanNo}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="font-semibold text-lg">Aadhar Number</h2>
                  <p className="text-base">{usr.AadharNo}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
