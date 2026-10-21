
export async function GET() {
  return Response.json({
    status: "ok",
    provider: "RouteMate",
    apiKeyConfigured: Boolean(process.env.ROUTEMATE_API_KEY),
  });
}
