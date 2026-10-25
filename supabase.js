// Unity Cooperative — Supabase configuration

const SUPABASE_URL = "https://jyltaemwblpmrviodnve.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5B-3r3pgyGNq-5InPh-orQ_hkSkFuv5";

// The Supabase library must be loaded in the HTML page
// before this file runs.
if (!window.supabase) {
  console.error(
    "Supabase library is missing. Load it before supabase.js."
  );
} else {
  window.unitySupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Unity Cooperative: Supabase client initialised.");
}
async function testUnityConnection() {
  try {
    const { data, error } = await window.unitySupabase
      .from("profiles")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Unity Cooperative connection test failed:", error.message);
      alert("Connection test failed. Check the browser console.");
      return;
    }

    console.log("Unity Cooperative database connection successful!");
    alert("Unity Cooperative database connection successful!");
  } catch (err) {
    console.error("Connection error:", err);
    alert("Could not connect. Check your internet and Supabase settings.");
  }
}

testUnityConnection();