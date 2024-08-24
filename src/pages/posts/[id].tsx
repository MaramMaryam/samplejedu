// "use client";

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useQuery } from '@tanstack/react-query'
import { getPost } from 'src/apis/getOnePost'
import { Button } from '@mui/material'
import { useRouter } from 'next/router';

const SecondPage = (posts: any) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query.id, posts)

  const { data, isLoading, error } = useQuery({
    queryKey: ['getPost', id],
    queryFn: () => getPost(id), // Fetch the post with the given ID
    enabled: !!id, // Only run the query if the ID is available
  });
  console.log(data, isLoading)
  if (!isLoading) {
    console.log(data)
  }
  return (
    <>{data && !isLoading ?
      <Grid container spacing={6} >
        <Grid item xs={12}>
          <Card sx={{ my: 2, direction: 'ltr' }}>
            <CardHeader title={data.id + '_' + data.title} sx={{ fontSize: 30 }} />
            <CardContent>
              {data.body}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      : <>...Loading </>
    }
    </>
  )
}

export default SecondPage
