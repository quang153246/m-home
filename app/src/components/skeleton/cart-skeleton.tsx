import { Card, Typography, Skeleton, Stack } from "@mui/material";
const CartSkeleton = () => {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        pb: 1.5,
      }}
    >
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={"100%"} height={220} />
        <Stack px={1} spacing={2}>
          <Typography variant="h5">
            <Skeleton />
          </Typography>
            <Skeleton variant="text" sx={{fontSize:'14px'}} width={"60%"} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default CartSkeleton;
