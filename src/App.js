import React, { useEffect, useState } from 'react';
import { fetchAssessmentData } from './services/contentfulService';

export const App = () => {
  const [formattedData, setFormattedData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAssessmentData();
        setFormattedData(JSON.stringify(data))
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    getData();
  }, []);

  return formattedData && <crediblemind-assessment id={'crediblemind-assessment'} data={formattedData}></crediblemind-assessment>;
}

