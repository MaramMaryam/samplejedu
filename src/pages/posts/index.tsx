// "use client";

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useQuery } from '@tanstack/react-query'
import { getStaticProps } from 'src/apis/getPost'
import { Button } from '@mui/material'
import Link from 'next/link'

const SecondPage = ({ posts }: any) => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['getPosts'],
    queryFn: getStaticProps,
  });
  console.log(data?.props)
  return (
    <>
      {data?.props?.posts?.map((item: any, index: any) => (
        <Grid key={item.id} container spacing={6} >
          <Grid item xs={12}>
            <Card sx={{ my: 2, direction: 'ltr' }}>
              <CardHeader title={`${item.title}🙌`} sx={{ fontSize: 30 }}></CardHeader>
              <CardContent>
                <Typography>
                  {item.body}
                </Typography>
              </CardContent>
              <CardContent sx={{ direction: 'rtl', m: 0 }}>
                <Button type='submit' variant='outlined' color='warning' onClick={() => console.log(item.id)}>
                  <Link href={`/posts/${item.id}`} style={{ textDecoration: 'none', color: 'green' }}>
                    ...Continue
                  </Link>
                </Button></CardContent>

            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default SecondPage
