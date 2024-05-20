<script>
    export let data;
    import { page } from '$app/stores';
</script>

<a href='/posts/{data.post.userId}'></a>
<p>{data.post.body}</p>