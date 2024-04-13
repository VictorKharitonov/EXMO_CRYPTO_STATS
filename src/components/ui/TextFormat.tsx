import { FC, memo, useEffect, useState } from 'react';
import { LANG } from '../../consts.ts';
import { Typography, TypographyProps } from '@mui/material';

export type TTextFormat = 'money' | 'default';
type TTextFormatState = Record<TTextFormat, string | number>;

interface TextFormatProps extends Partial<TypographyProps> {
  data: number | string;
  type?: TTextFormat;
}

const TextFormat: FC<TextFormatProps> = ({ data, color = '#ffffff', type = 'default', ...props }) => {
  const [format, setFormat] = useState<TTextFormatState>({
    money: new Intl.NumberFormat(LANG).format(Number(data)),
    default: data
  });

  useEffect(() => {
    setFormat(prevFormat => ({
      ...prevFormat,
      [type]: data
    }));
  }, [data, type]);

  return (
    <Typography variant="body1" color={color} {...props}>
      {format[type]}
    </Typography>
  );
};

export default memo(TextFormat);
