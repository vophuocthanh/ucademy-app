export default function page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  console.log('params', params);
  console.log('searchParams', searchParams);
  return <div>Account page</div>;
}
