import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]); // Declare state only once

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Assuming `item` is an object with an `id` and `text`
    setBucket((prevBucket) => [
      ...prevBucket,
      { id: Date.now(), text: item.text, completed: false }, // Add a unique id and a completed state
    ]);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    let updatedBucket = bucket.map((item) => {
      // Toggle the completed status of the item if its ID matches
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item; // Return the item unchanged if the ID doesn't match
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // Filter out the item with the specified ID
    const updatedBucket = bucket.filter((item) => item.id !== id);

    // Update the bucket state variable
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // Update the bucket list with the new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, text: newValue.text } : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;

