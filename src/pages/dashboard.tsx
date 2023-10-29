import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Props } from 'react-apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: Props['options'] = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-12-15T00:00:00.000Z',
      '2021-12-16T00:00:00.000Z',
      '2021-12-17T00:00:00.000Z',
      '2021-12-18T00:00:00.000Z',
      '2021-12-19T00:00:00.000Z',
      '2021-12-20T00:00:00.000Z',
      '2021-12-21T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }]

export default function Dashboard() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px">
      <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
        <Text fontSize="lg" mb="4">
          Inscritos da semana
        </Text>
        <Chart options={options} series={series} type="area" height={168} />
      </Box>
      <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
        <Text fontSize="lg" mb="4">
          Taxa de abertura
        </Text>
        <Chart options={options} series={series} type="area" height={168} />
      </Box>
    </SimpleGrid>
  )
}
