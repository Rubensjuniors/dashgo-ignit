import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './components/item'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{0}</strong> - <strong>10</strong> de
        <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent onPageChange={() => 1} />
        <PaginationItem number={2} onPageChange={() => 1} />
        <PaginationItem number={3} onPageChange={() => 1} />
      </Stack>
    </Stack>
  )
}
