// MedicationOrderScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const MedicationOrderScreen = () => {
  // Define medications
  const medications = [
    { name: 'Paracetamol', quantity: 20 },
    { name: 'Amoxicillin', quantity: 10 },
    { name: 'Ibuprofen', quantity: 15 },
    { name: 'Ciprofloxacin', quantity: 10 },
    { name: 'Omeprazole', quantity: 10 },
    { name: 'Metronidazole', quantity: 10 },
    { name: 'Diazepam', quantity: 5 },
    { name: 'Hydrochlorothiazide', quantity: 5 },
    { name: 'Glibenclamide', quantity: 5 },
    { name: 'Aspirin', quantity: 20 }
  ];

  // Function to handle order confirmation
  const handleOrderConfirmation = () => {
    alert('Your order has been confirmed!');
  };

  return (
    <View>
      <Text>Choose Your Medication:</Text>
      {/* Display medication options */}
      {medications.map((medication, index) => (
        <View key={index}>
          <Text>{medication.name}</Text>
          <Text>Quantity: {medication.quantity}</Text>
        </View>
      ))}
      {/* confirmation order button */}
      <Button title="Confirm Order" onPress={handleOrderConfirmation} />
    </View>
  );
};

export default MedicationOrderScreen;
