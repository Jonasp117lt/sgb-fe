import Swal from "sweetalert2"

export const requestError = (title, text) => Swal.fire({
    icon: "error",
    title,
    text,
})

export const requestSuccess = (title, text) => Swal.fire({
    icon: "success",
    title,
    text,
})

export default {
    requestError,
    requestSuccess
}