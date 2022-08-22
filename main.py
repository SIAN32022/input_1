def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_leds("""
        . . . . .
                # # # # #
                # # # # #
                # # # # #
                . . . . .
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.SAD)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)
