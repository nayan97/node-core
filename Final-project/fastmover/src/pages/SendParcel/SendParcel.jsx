import React from 'react';

const SendParcel = () => {

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Enter your parcel details</h2>

      <div className="flex gap-6 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="parcelType" className="radio checked:bg-green-500" defaultChecked />
          <span>Document</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="parcelType" className="radio" />
          <span>Not-Document</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Parcel Name" className="input input-bordered w-full" />
        <input type="text" placeholder="Parcel Weight (KG)" className="input input-bordered w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sender Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sender Details</h3>
          <input type="text" placeholder="Sender Name" className="input input-bordered w-full mb-3" />
          <select className="select select-bordered w-full mb-3">
            <option disabled selected>Select Wire house</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <input type="text" placeholder="Address" className="input input-bordered w-full mb-3" />
          <input type="text" placeholder="Sender Contact No" className="input input-bordered w-full mb-3" />
          <select className="select select-bordered w-full mb-3">
            <option disabled selected>Select your region</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Others</option>
          </select>
          <textarea className="textarea textarea-bordered w-full" placeholder="Pickup Instruction"></textarea>
        </div>

        {/* Receiver Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Receiver Details</h3>
          <input type="text" placeholder="Receiver Name" className="input input-bordered w-full mb-3" />
          <select className="select select-bordered w-full mb-3">
            <option disabled selected>Select Wire house</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <input type="text" placeholder="Address" className="input input-bordered w-full mb-3" />
          <input type="text" placeholder="Receiver Contact No" className="input input-bordered w-full mb-3" />
          <select className="select select-bordered w-full mb-3">
            <option disabled selected>Select your region</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Others</option>
          </select>
          <textarea className="textarea textarea-bordered w-full" placeholder="Delivery Instruction"></textarea>
        </div>
      </div>

      <p className="text-sm mt-4 mb-6">* PickUp Time 4pm-7pm Approx.</p>

      <button className="btn btn-success w-full md:w-auto">Proceed to Confirm Booking</button>
    </div>
  );
};

export default SendParcel;