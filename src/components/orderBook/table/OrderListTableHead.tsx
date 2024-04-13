import { FC, memo } from 'react';
import { TableCell, TableHead, TableHeadProps, TableRow, Typography } from '@mui/material';

interface OrderListTableHeadProps extends TableHeadProps {
  titles: string[];
}

const OrderListTableHead: FC<OrderListTableHeadProps> = ({ titles }) => {
  return (
    <TableHead>
      <TableRow sx={{ 'td, th': { border: '0 0 1px 0', padding: '4px 10px 4px 10px' } }}>
        {titles.map(title => (
          <TableCell align="left" key={title}>
            <Typography color="white" variant="body2">
              {title}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default memo(OrderListTableHead);
