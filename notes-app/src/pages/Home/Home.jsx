import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown : false,
    type : "add",
    data: null,
  })
  const note = {
    title: "Sample Note",
    date: "2024-06-20",
    content: "This is a sample content for the note. It should be long enough to see the slice effect.",
    tags: ["tag1", "tag2"],
    isPinned: true,
  };

  return (
    <Fragment>
      <Navbar />
      <div className='container mx-auto mt-4'>
        <div className='grid grid-cols-3 gap-4 mt-8'> 
          <NoteCard
            title={note.title}
            date={note.date}
            content={note.content}
            tags={note.tags}
            isPinned={note.isPinned}
            onEdit={() => console.log("Edit Note")}
            onDelete={() => console.log("Delete Note")}
            onPinNote={() => console.log("Pin Note")}
          />
          
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
              onClick={()=> 
                setOpenAddEditModal({
                  isShown: true,
                  type: "add",
                  data: null
                })
              }>
        <MdAdd 
          className='text-[32px] text-white'
         />
      </button>

        <Modal
          isOpen = {openAddEditModal.isShown}
          onRequestClose = {()=> {}}
          style= {
            {
              overlay : {
                backgroundColor : "rgba(0,0,0,0.2)",
              },
            }
          }
          contentLabel =""
          className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
         > 

      <AddEditNotes 
      type={openAddEditModal.type}
      noteData={openAddEditModal.data}
      
        onClose={()=> {
          setOpenAddEditModal({
            isShown: false,
            type : "add",
            data: null

          })
        }}

        />
      </Modal>
    </Fragment>
  );
};

export default Home;
