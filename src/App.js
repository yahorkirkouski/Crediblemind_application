import React, { useEffect, useState } from 'react';
import { fetchAssessmentData } from './services/contentfulService';

export const App = () => {
  const [formData, setFormData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAssessmentData();
        setFormData(JSON.stringify(data))
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    getData();
  }, []);

  return formData && <crediblemind-assessment data={formData}></crediblemind-assessment>
}

