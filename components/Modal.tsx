import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Input from './Input';

const Modal = ({
  isOpen,
  setIsOpen,
  onSubmit,
}: {
  isOpen: any;
  setIsOpen: any;
  onSubmit: (formValues: any) => void;
}) => {
  const [form, setForm] = useState({});

  const onChangeHandler = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-20">
        <Dialog.Panel>
          <form
            className="bg-white rounded w-[calc(100vw/2)]"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(form);
            }}
          >
            <div className="bg-red-600 rounded-t flex justify-center mb-5">
              <h3 className="px-8 py-4 rounded font-bold text-white">
                New Pokemon
              </h3>
            </div>
            <div className="p-6">
              <Input
                name="imageUrl"
                label="Image Url"
                onChangeHandler={onChangeHandler}
              />
              <Input
                name="name"
                label="Name"
                onChangeHandler={onChangeHandler}
              />
              <Input name="hp" label="Hp" onChangeHandler={onChangeHandler} />
              <Input
                name="attack"
                label="Attack"
                onChangeHandler={onChangeHandler}
              />
              <Input
                name="defense"
                label="Defense"
                onChangeHandler={onChangeHandler}
              />
            </div>
            <div className="p-6 flex justify-between">
              <button
                className="border-2 text-gray-500 font-bold px-4 py-2 rounded hover:bg-gray-200 flex-1 mr-1"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-red-800 flex-1 ml-1"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
