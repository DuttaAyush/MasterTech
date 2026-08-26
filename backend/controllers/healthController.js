export async function handleHealthCheck() {
  return {
    status: 200,
    data: {
      status: 'ok',
      service: 'MIMAG Technologies Enterprise Backend',
      version: '1.0.0',
      time: new Date().toISOString(),
    },
  };
}
