"use client"
// import { firestore } from 'firebase/firestore';
import {Box, Stack, Typography} from '@mui/material' 
import { firestore } from '@/firebase'
import { collection } from 'firebase/firestore'
import { useEffect } from 'react'


const item = ['tomato', 'potato', 'onion', 'garlic', 'ginger', 'carrot', 'lettuce', 'kale', 'cucumber']

export default function Home() {
    useEffect(() => {
      const updatePantry = async () => {
      const snapshot = query(collection(firestore, 'pantry'))
      const docs = await getDocs(snapshot)
      docs.forEach((doc) => {
        console.log(doc.id, doc.data())
      })
    }
    updatePantry()
   }, [] )
    return ( 
      <Box 
        width="100vw" 
        height="100vh" 
        display={'flex'} 
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Box border={'1px solid #333'}>
        <Box width="800px" height="100px" bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
          Pantry Items
          </Typography>
        </Box>
        <Stack width="800px" height="400px" spacing={2} overflow={'auto'}>
          {item.map((i) => (
              <Box
                key={i}
                width="100%"
                height="100px"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'#f0f0f0'}
                >
                  <Typography
                    variant={'h4'}
                    color={'#333'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                  > 
                    {
                      //Capitalize the first letter of the item
                      i.charAt(0).toUpperCase() + i.slice(1)
                    }
                  </Typography>
                </Box>
            ))}
        </Stack>
      </Box>
    </Box>
  )
}
