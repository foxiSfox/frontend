<script lang="ts">
  import { Nav, NavItem, NavLink } from 'sveltestrap';
</script>

<div class="container">
    <header class="header">
        <nav>
            <Nav tabs>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/users">Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            </Nav>
        </nav>
    </header>
    <main class="main">
        <slot />
    </main>
    <footer class="footer">
        <div class="copyright">&copy; 2023 - 2024</div>
    </footer>
</div>

<style>
    :global(h1) {
        margin-bottom: 20px;
    }

    .copyright {
        border-top: 1px solid gray;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
    }

    .container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .main {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .footer {
        margin-top: auto;
    }
</style>



