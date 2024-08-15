import React, { useEffect } from 'react';
import { fetchAssessmentData } from './services/contentfulService';

export const App = () => {

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAssessmentData();
        console.log(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    getData();
  }, []);
}

