export default function ({ route, redirect }) {
  if (route.fullPath === "/events") {
    return redirect('/')
  }
}